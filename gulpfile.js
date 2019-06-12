const {watch} = require('gulp');
const url = require('url');
const net = require('net');
const server = net.createServer((c) => {
  //'connection listener
  console.log('client connected');
  c.on('end', ()=> {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});
server.on('error', (err)=>{
  throw err;
});
server.listen(3001, ()=>{
  console.log("listening to port 3001");
});
exports.default = function(){
  watch('public_html/*', {ignoreInitial:false}, function(cb){
  });
};
