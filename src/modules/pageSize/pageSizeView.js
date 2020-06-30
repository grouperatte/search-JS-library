const pageSizeUi = function(pageSize) {
    const {
        pagesize
    } = this.options;
    let ui = `<select  class="UNX-select-pagesize ${pagesize.pageSizeClass}">`;
    pagesize.options.forEach((opt)=>{
        if(pageSize == opt) {
            ui+=`<option selected class="${pagesize.selectedPageSizeClass}" id="${opt}">${opt}</option>`
        } else{
            ui+=`<option id="${opt}">${opt}</option>`
        }
        
    });
    ui+= `</select>`
    return `<div class="UNX-pagesize-block">
        ${ui}
    </div>`;
}
export default pageSizeUi;
