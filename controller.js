import schema from './user.model.js'

export function addData(req,res)

{
    const {task}=req.body;
    console.log(task);
    res.status(201).send(schema.create({task}))
    res.end();
    

}
export function getData(req,res)
{
    try{
        schema.find().then((data)=>{
            console.log(data);
            res.status(200).send(data);

        }).catch((error)=>{
            res.status(400).send(error);
        })
    }catch (error){
        console.log(error);

    }
}
export async function deleteData(req,res)
{
    const{id}=req.params;
    schema.deleteOne({_id:id}).then(()=>{
        console.log("deleted");

    }).catch(()=>{
        console.log('error');
    })
    res.end();
}