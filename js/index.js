$(document).ready(function(){
    var ci=$('#check-icon');
    var cx=$('.check-xz');
    ci.click(function () {
        if(this.checked){
            cx.attr('checked',true);
        }else{
            cx.attr('checked',false);
        }
    })
    var ci1=$('#check-icon1');
    var cx1=$('.check-xz1');
    ci1.click(function () {
        if(this.checked){
            cx1.attr('checked',true);
        }else{
            cx1.attr('checked',false);
        }
    })
})