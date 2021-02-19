
/**************Col-1**************/
d3.select("#slider-1").on("mousemove",function(event){
let i = parseInt(d3.select(this).property('value'));
/*let a = event.clientX;
i = a;*/
var j = d3.select("#straight");
var k = d3.select("#curve-1");
var l = d3.select("#curve-2");

if(i%3 == 1){j.attr("stroke-width",1).attr("stroke-dasharray","3 3") & k.attr("stroke-width",2).attr("stroke-dasharray","") & l.attr("stroke-width",1).attr("stroke-dasharray","3 3")}
else if(i%3 == 2){j.attr("stroke-width",1).attr("stroke-dasharray","3 3") & l.attr("stroke-width",2).attr("stroke-dasharray","") & k.attr("stroke-width",1).attr("stroke-dasharray","3 3")}
else if(i%3 == 0){j.attr("stroke-width",2).attr("stroke-dasharray","") & l.attr("stroke-width",1).attr("stroke-dasharray","3 3") & k.attr("stroke-width",1).attr("stroke-dasharray","3 3")}
})

/************Col-3**********/
d3.select("#slider-2").on("input",function(){
let i = parseInt(d3.select(this).property('value'));
var circle = ["#one","#two","#three","#four","#five"];
d3.select("#svg_col-3").attr("visibility","")
if (i==1){d3.select(circle[0]).attr("fill","#fa02027c") & d3.select("#one-1").attr("visibility","")}
else if(i==2){d3.select(circle[1]).attr("fill","#fa02027c") & d3.select("#two-2").attr("visibility","") & d3.select(circle[0]).attr("fill","C4C4C4") & d3.select("#one-1").attr("visibility","hidden") }
else if(i==3){d3.select(circle[2]).attr("fill","#fa02027c") & d3.select("#three-3").attr("visibility","") & d3.select(circle[0]).attr("fill","C4C4C4") & d3.select(circle[1]).attr("fill","C4C4C4") & d3.select("#one-1").attr("visibility","hidden") & d3.select("#two-2").attr("visibility","hidden")}
else if(i==4){d3.select(circle[3]).attr("fill","#fa02027c") & d3.select("#four-4").attr("visibility","hidden") & d3.select(circle[0]).attr("fill","C4C4C4") & d3.select(circle[1]).attr("fill","C4C4C4") & d3.select(circle[2]).attr("fill","C4C4C4") & d3.select("#one-1").attr("visibility","hidden") & d3.select("#two-2").attr("visibility","hidden") & d3.select("#three-3").attr("visibility","hidden")}
else if(i==5){d3.select(circle[4]).attr("fill","#fa02027c") & d3.select("#dotted_text").attr("visibility","")  & d3.select("#svg_col-3").attr("visibility","") & d3.select("#five-5").attr("visibility","") & d3.select(circle[0]).attr("fill","C4C4C4") & d3.select(circle[1]).attr("fill","C4C4C4") & d3.select(circle[2]).attr("fill","C4C4C4") & d3.select(circle[3]).attr("fill","C4C4C4") & d3.select("#one-1").attr("visibility","hidden") & d3.select("#two-2").attr("visibility","hidden") & d3.select("#three-3").attr("visibility","hidden") & d3.select("#four-4").attr("visibility","hidden")}
})

d3.select("#zoom").call(d3.zoom().on("zoom",function(){
d3.select(this).transition().duration(1800)
.attr("width",185)
.attr("height",170)
.attr("transform","translate(20,60)")

d3.select("#coordinate").attr("visibility","");
d3.select("#dotted_text").attr("visibility","hidden");
d3.select("#string_col-3").attr("visibility","hidden");
}))

d3.select("#x_coord").on("mouseover",function(){

    d3.select("#x_dot")
    .attr("stroke","blue")})

d3.select("#x_coord").on("mouseout",function(){
    d3.select("#x_dot")
    .attr("stroke","black") })

d3.select("#y_coord").on("mouseover",function(){

    d3.select("#y_dot")
    .attr("stroke","blue")})

d3.select("#y_coord").on("mouseout",function(){
    d3.select("#y_dot")
    .attr("stroke","black") })

/************Col-4**********/

//Hypotenuse
d3.select("#text_hypo").on("mouseover",function(){

   
    d3.select("#hypo_col-4")
    .attr("stroke","red")})

d3.select("#text_hypo").on("mouseout",function(){
    d3.select("#hypo_col-4")
    .attr("stroke","#0D1FC1") })

//dx
d3.select("#text_dx").on("mouseover",function(){

    d3.select("#dx_col-4")
    .attr("stroke","red")})
    
d3.select("#text_dx").on("mouseout",function(){
    d3.select("#dx_col-4")
    .attr("stroke","#0D1FC1") })

/************Col-5**********/
//Force-1
d3.select("#eq_force-1").on("mouseover",function(){

   
    d3.select("#svgforce-1")
    .attr("fill","red")})

d3.select("#eq_force-1").on("mouseout",function(){
    d3.select("#svgforce-1")
    .attr("fill","#0D1FC1") })

//Height
d3.select("#eq_height").on("mouseover",function(){

    d3.select("#svgheight_col-5")
    .attr("stroke","red")})
    
d3.select("#eq_height").on("mouseout",function(){
    d3.select("#svgheight_col-5")
    .attr("stroke","#0D1FC1") })

//Base
d3.select("#eq_base").on("mouseover",function(){

   
    d3.select("#svgbase_col-5")
    .attr("stroke","red")})

d3.select("#eq_base").on("mouseout",function(){
    d3.select("#svgbase_col-5")
    .attr("stroke","#0D1FC1") })

//Force-2
d3.select("#eq_force-2").on("mouseover",function(){

    d3.select("#svgforce-2")
    .attr("fill","red")})
    
d3.select("#eq_force-2").on("mouseout",function(){
    d3.select("#svgforce-2")
    .attr("fill","#0D1FC1") })

/************Col-6**********/
//Force-1
d3.select("#force-1").on("mouseover",function(){

   
    d3.select("#svg_force-1_6")
    .attr("fill","red")})

d3.select("#force-1").on("mouseout",function(){
    d3.select("#svg_force-1_6")
    .attr("fill","#0D1FC1") })

//Force-2
d3.select("#force-2").on("mouseover",function(){

    d3.select("#svg_force-2_6")
    .attr("fill","red")})
    
d3.select("#force-2").on("mouseout",function(){
    d3.select("#svg_force-2_6")
    .attr("fill","#0D1FC1") })

//xi+1
d3.select("#xi_1").on("mouseover",function(){

    d3.select("#svg_xi_1")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_1").on("mouseout",function(){

    d3.select("#svg_xi_1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi_1
d3.select("#xi__1").on("mouseover",function(){

    d3.select("#svg_xi")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#xi__1").on("mouseout",function(){
    d3.select("#svg_xi")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//dx
d3.select("#dx_1").on("mouseover",function(){

    d3.select("#svg_dx_1")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#dx_1").on("mouseout",function(){
    d3.select("#svg_dx_1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi-1
d3.select("#xi_minus1").on("mouseover",function(){

    d3.select("#svg_xi_minus1")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_minus1").on("mouseout",function(){

    d3.select("#svg_xi_minus1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi_2
d3.select("#xi_2").on("mouseover",function(){

    d3.select("#svg_xi")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_2").on("mouseout",function(){
    d3.select("#svg_xi")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//dx
d3.select("#dx_2").on("mouseover",function(){

    d3.select("#svg_dx_2")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#dx_2").on("mouseout",function(){
    d3.select("#svg_dx_2")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

