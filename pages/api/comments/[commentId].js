import { family } from "../../../data/comments"

export default function handler(req,res){
    const { commentId } = req.query
    if (req.method === 'GET') {
        const erase = family.find((comment) => comment.id === parseInt(commentId))//find((comment) here comment refers to /api/comments-file
        res.status(200).json(erase)
    }else if(req.method === 'DELETE') {
        const deleteComment = family.find((comment) => comment.id === parseInt(commentId))//find((comment) here comment refers to /api/comments-file
        
        const index = family.findIndex((comment) => comment.id === parseInt(commentId))
        family.splice(index, 1)
       
        res.status(200).json(deleteComment)
    }else if(req.method === 'PUT') {
        const updateComment = family.find((comment) => comment.id === parseInt(commentId))//find((comment) here comment refers to /api/comments-file
        
        //const index = family.findIndex((comment) => comment.id === parseInt(commentId))
        //family.splice(index, 1)
       
        res.status(200).json(updateComment)
    }
    
}





