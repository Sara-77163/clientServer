const express=require("express")
const router=express.Router()
const {book}=require("../data")
router.get("/",(req,res)=>{
    res.json(book)
})
router.get("/:id",(req,res)=>{
    const {id}=req.params
   const Book=book.find(b=>b.id===Number(id))
   console.log(Book)
   res.json(Book)
})
router.post("/create_book",(req,res)=>{
    const {id,name,author,pages,publish_year}=req.body
    const new_books=[...book,{id,name,author,pages,publish_year}];
    res.json(new_books)  
})
router.put("/update",(req,res)=>{
    const {id,name,author,pages,publish_year}=req.body
    const new_book=book.map(b=>{
        if(Number(id)===b.id)
            return {id,name,author,pages,publish_year}
        return b
    })
    res.json(new_book)
})
router.delete("/delete",(req,res)=>{
   const {id}=req.body
   const new_book=book.filter(b=>!(Number(id)===b.id))
   res.json(new_book)
})
module.exports=router