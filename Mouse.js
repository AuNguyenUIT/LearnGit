const Mouse =(name)=>{
    this.name=name;
}
Mouse.prototype.Die=()=>{
    this.dead=true;
}
export default Mouse;