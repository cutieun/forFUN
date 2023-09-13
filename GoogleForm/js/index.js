const wrapper = document.querySelector(".wrapper");
const mainSelect = wrapper.querySelector(".main-select");
const mainContent = wrapper.querySelector(".main-content");

// 페이지 로드될 때 이벤트
window.onload = function () {
  changeSeleteOption();
};

// selectBox 값이 변경될 때 이벤트
function changeSeleteOption() {
  mainContent.innerHTML = "";

  const selectedValue = mainSelect.value;

  switch (selectedValue) {
    case "단답형":
      defaultTextList("short");
      break;
    case "장문형":
      defaultTextList("long");
      break;
    case "객관식":
    case "체크박스":
    case "드롭다운":
      defaultChoiceList();
      break;
  }

  mainSelect.addEventListener("change", changeSeleteOption);

  // 객관식, 체크박스, 드롭다운 옵션 기본설정
  function defaultChoiceList() {
    const list = document.createElement("ul");
    const addBtn = document.createElement("button");
    mainContent.appendChild(list);

    addListItem();
    
    addBtn.classList.add("add-option-btn");
    addBtn.textContent = "옵션 추가";
    addBtn.addEventListener("click", addListItem);
    mainContent.appendChild(addBtn);
  }

  // 객관식, 체크박스, 드롭다운 옵션 추가
  function addListItem() {
    const list = mainContent.querySelector('ul');
    const listItem = document.createElement("li");
    const input = document.createElement("input");
    const deleteBtn = document.createElement("button");
    
    list.appendChild(listItem);
    listItem.appendChild(input);
    listItem.appendChild(deleteBtn);
    deleteBtn.classList.add("del-option-btn");
    deleteBtn.addEventListener("click", delListItem);

    input.placeholder = "옵션";
    deleteBtn.textContent = "X";
  }

  function delListItem(e) {
    const target = e.target.parentElement;
    target.remove();
  }

  // 단답, 장문형 옵션 기본설정
  function defaultTextList(opt) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    mainContent.appendChild(div);
    div.appendChild(p);
    p.textContent = opt === "short" ? '단답형' : '장문형';
  }
}
