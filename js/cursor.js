class Cursor {
    constructor() {
      this.pos = { curr: null, prev: null };
      this.pt = [];
      this.create();
      this.init();
      this.render();
    }
  
    move(left, top) {
      this.cursor.style["left"] = `${left}px`;
      this.cursor.style["top"] = `${top}px`;
    }
  
    create() {
      if (!this.cursor) {
        this.cursor = document.createElement("div");
        this.cursor.id = "cursor";
        this.cursor.classList.add("hidden");
        document.body.append(this.cursor);
      }
      var el = document.getElementsByTagName('*');
      for (let i = 0; i < el.length; i++)
        if (getStyle2(el[i], "cursor") == "pointer")
          this.pt.push(el[i].outerHTML);
      var colorVal = map.get(localStorage.getItem("themeColor"));
      document.body.appendChild((this.scr = document.createElement("style")));
      this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='9px' height='9px'><circle cx='4' cy='4' r='4' opacity='1.0' fill='` + colorVal + `'/></svg>") 4 4, auto}`;
    }
  
    refresh() {
      this.scr.remove();
      this.cursor.classList.remove("hover");
      this.cursor.classList.remove("active");
      this.pos = { curr: null, prev: null };
      this.pt = [];
  
      this.create();
      this.init();
      this.render();
    }
  
    init() {
      document.onmouseover = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
      document.onmouseout = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
      document.onmousemove = e => { (this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8); this.pos.curr = { x: e.clientX - 8, y: e.clientY - 8 }; this.cursor.classList.remove("hidden"); };
      document.onmouseenter = e => this.cursor.classList.remove("hidden");
      document.onmouseleave = e => this.cursor.classList.add("hidden");
      document.onmousedown = e => this.cursor.classList.add("active");
      document.onmouseup = e => this.cursor.classList.remove("active");
    }
  
    render() {
      if (this.pos.prev) {
        // 跟踪速度调节
        this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.3);
        this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.3);
        this.move(this.pos.prev.x, this.pos.prev.y);
      } else {
        this.pos.prev = this.pos.curr;
      }
      requestAnimationFrame(() => this.render());
    }
  }
  
  (() => {
    CURSOR = new Cursor();
    // 需要重新获取列表时，使用 CURSOR.refresh()
  })();
  
  /* 听话鼠标 end */