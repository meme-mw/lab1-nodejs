import Book from '../models/book.js';

import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

function authenticateToken(req, res, next) {

    const token = req.headers['authorization'];
    
    if (!token) return res.status(401).json({ message: 'Access Denied' });
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    
    if (err) return res.status(403).json({ message: 'Invalid Token' });
    
    req.user = user; // إضافة بيانات المستخدم إلى الطلب
    
    next();
    
    });
    
    }
export const addBook = async (req, res) =>{

    try {
    
    const user = await User.findById(req.user.id);
    
    if (!user) {
    
    return res.status(404).json({ message: 'User not found' });
    
    }
    
    const book = new Book({
      name:req.body.name,
      author:user._id,
      num_of_cop:req.body.num_of_cop,
      dat_of_pub:req.body.dat_of_pub, 
      isDeg:req.body.isDeg,
      price:req.body.price,
      langs:req.body.langs,
      genre:req.body.genre
     });
    
    await book.save(); // تأكد من أن المقالة تم حفظها
    
    console.log('New book created:', book); // تحقق من المقالة الجديدة
    
    // إضافة معرف المقالة إلى مدونات المستخدم
    
    user.books.push(book._id);
    
    console.log('User blogs before saving:', user.books); // تحقق من المدونات قبل الحفظ
    
    await user.save(); // تأكد من الانتظار هنا أيضًا
    
    // إرسال استجابة
    
    res.status(201).json({
    
    message: 'book created successfully',
    
    book: book
    
    });
    
    } catch (error) {
    
    console.error(error); // طباعة الخطأ في حال حدوثه
    
    res.status(500).json({ message: 'Error creating article', error });
    
    }
    
    };

   
    export const addoneBook = async (req, res)=> {

        try {
        
        const user = await User.findById(req.params.id).populate('books'); // استخدم populate هنا
        
        if (!user) {
        
        return res.status(404).json({ message: 'User not found' });
        
        }
        
        res.status(200).json(user); // سيحتوي على بيانات المستخدم مع مقالاته
        
        } catch (error) {
        
        console.error(error);
        
        res.status(500).json({ message: 'Error retrieving user', error });
        
        }
        
        };