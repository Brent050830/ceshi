window.MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],      // 支持行内公式 $...$
      ['\\(', '\\)']  // 保留原始配置
    ],
    displayMath: [
      ['$$', '$$'],    // 支持块级公式 $$...$$
      ['\\[', '\\]']  // 保留原始配置
    ],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})