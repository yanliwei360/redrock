/* function sayInfo(age) {
  console.log("name:"+this.name)
  console.log("age:"+age)
}
var user = {
  name: "zzx" 
}
Function.prototype.call2 = function(target){
     var args = []
     target.fn = this;
     for(var i=1;i<arguments.length;i++){
         args.push(arguments[i])
     }
     target.fn(args.join(','));
    }
sayInfo.call2(user,100)
 */

  var s={
     name:'ylw'
 } 
 function test(age){
     console.log('我的名字叫'+this.name + '，我今年' + age + '岁了')
 }  
 Function.prototype.$call = function(target){
     var args = []
     target.fn = this;
     for(var i=1;i<arguments.length;i++){
         args.push(arguments[i])
     }
     target.fn(args.join(','));
      delete target.fn; 
 }
 test.$call(s,22);