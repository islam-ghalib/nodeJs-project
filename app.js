const http =require("http");
const fs =require("fs");
const server=http.createServer((req,res)=>{

    const data ="Hi my name is Islam Alassf";
    fs.writeFile("myfile.txt",data ,(err)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"});
            res.end("sorry can't write to the file");
        }
        else{
            fs.readFile("myfile.txt",(err,fileData)=>{
                if(err){
                    res.writeHead(500,{"content-type":"text/plain"});
                    res.end("sorry can't read the file");
                }
                else{
                    res.writeHead(200,{"content-type":"text/html"});
                    res.end(`<h1>${fileData}<h1/>`)
                }
            })
        }
    })
    
});
//localhost 127.0.0.1

const thePort=3000;
const theHost="127.0.0.1";
server.listen(thePort,theHost,()=>{
    console.log(`the server is now running on port # ${thePort} and host ${theHost}`)
})