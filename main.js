const buttons = [
    {id: "btn-1", classname: ".matter1", displaystyle: "flex", toggle: false},
    {id: "btn-2", classname: ".matter2", displaystyle: "flex", toggle: false},
    {id: "btn-3", classname: ".matter3", displaystyle: "flex", toggle: false},
    {id: "btn-4", classname: ".matter4", displaystyle: "block", toggle: false},
    {id: "btn-5", classname: ".matter5", displaystyle: "flex", toggle: false}
];


buttons.forEach(button => {
    const btn = document.getElementById(button.id);
    btn.addEventListener("click", () => {
        button.toggle = !button.toggle;
        document.querySelectorAll(button.classname).forEach(element => {
            element.style.display = button.toggle ? button.displaystyle : "none";
        });
    });
});
