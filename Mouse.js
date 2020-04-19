
const Mouse =(name,weight)=>{
    this.name=name,
    this.weight=weight
}
Mouse.prototype.Die=()=>{
    this.dead=true;
}
export default Mouse;