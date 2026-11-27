$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // collapsible year groups on the publications page (#pub-list only)
  var pubList = document.getElementById("pub-list");
  if (pubList) {
    var nodes = Array.prototype.slice.call(pubList.childNodes);
    var groups = [];
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.nodeType === 1 && node.tagName === "H2" && node.classList.contains("bibliography")) {
        var list = null;
        for (var j = i + 1; j < nodes.length; j++) {
          var n = nodes[j];
          if (n.nodeType === 1 && n.tagName === "OL" && n.classList.contains("bibliography")) {
            list = n;
            break;
          }
          if (n.nodeType === 1 && n.tagName === "H2") break;
        }
        groups.push({ heading: node, list: list });
      }
    }

    if (groups.length) {
      var toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "expand-collapse-all";
      pubList.insertBefore(toggle, pubList.firstChild);

      var detailsEls = [];
      groups.forEach(function (g, idx) {
        var details = document.createElement("details");
        details.className = "year-group";
        if (idx < 2) details.setAttribute("open", "");

        var summary = document.createElement("summary");
        summary.className = "year-summary";

        var yearSpan = document.createElement("span");
        yearSpan.className = "year-label";
        yearSpan.textContent = g.heading.textContent.trim();

        var chev = document.createElement("span");
        chev.className = "year-chevron";
        chev.setAttribute("aria-hidden", "true");

        summary.appendChild(yearSpan);
        summary.appendChild(chev);
        details.appendChild(summary);
        if (g.list) details.appendChild(g.list);

        if (g.heading.parentNode) g.heading.parentNode.removeChild(g.heading);
        pubList.appendChild(details);
        detailsEls.push(details);
      });

      function allOpen() {
        return detailsEls.every(function (d) {
          return d.open;
        });
      }
      function updateLabel() {
        toggle.textContent = allOpen() ? "Collapse all" : "Expand all";
      }
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        var open = !allOpen();
        detailsEls.forEach(function (d) {
          d.open = open;
        });
        updateLabel();
      });
      detailsEls.forEach(function (d) {
        d.addEventListener("toggle", updateLabel);
      });
      updateLabel();
    }
  }
});
