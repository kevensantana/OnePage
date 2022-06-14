const Dcards = document.querySelector("div.cards")
const card = document.querySelector("div.card")

const infos = [
  {
    id: "01",
    cor: "#FF6363",
    title: "Título do card",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
  },
  {
    id: "02",
    cor: "#63ECFF",
    title: "Título do card",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
  },
  {
    id: "03",
    cor: "#F363FF",
    title: "Título do card",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
  },
  {
    id: "04",
    cor: "#63FF73",
    title: "Título do card",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
  },
  {
    id: "05",
    cor: "#FFDD63",
    title: "Título do card",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
  },
  {
    id: "06",
    cor: "#6663FF",
    title: "Título do card",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
  },
  {
    id: "06",
    cor: "#6663FF",
    title: "Título do card",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
  },
  {
    id: "06",
    cor: "#6663FF",
    title: "Título do card",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
  },
  
]

infos.map(info => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector(".title").innerHTML = info.title;
  cardClone.querySelector(".descricao").innerHTML = info.descricao;
  Dcards.appendChild(cardClone);
})

card.remove();