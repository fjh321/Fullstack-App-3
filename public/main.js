const senzubean = document.getElementsByClassName("senzuBean");
const training = document.getElementsByClassName("training");
const ki = document.getElementsByClassName("ki");
const trash = document.getElementsByClassName("fa fa-trash-o");


Array.from(senzubean).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.childNodes[1].innerText;
    const senzubean = parseInt(this.parentNode.childNodes[3].innerText);
    console.log(senzubean)
    fetch('messages/senzuBean', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'senzubean': senzubean
      })
    })
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(data => {
        // console.log(data);
        window.location.reload(true);
      });
  });
});

Array.from(training).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.childNodes[1].innerText;
    const training = parseInt(this.parentNode.childNodes[7].innerText)
    console.log(training)
    fetch('messages/training', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'training': training
      })
    })
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(data => {
        // console.log(data);
        window.location.reload(true);
      });
  });
});

Array.from(ki).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.childNodes[1].innerText;
    const ki = parseInt(this.parentNode.childNodes[11].innerText);
    console.log(ki)
    fetch('messages/ki', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'ki': ki
      })
    })
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(data => {
        // console.log(data);
        window.location.reload(true);
      });
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText;
    const senzubean = this.parentNode.parentNode.childNodes[3].innerText;
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'senzubean': senzubean
      })
    }).then(function (response) {
      window.location.reload();
    });
  });
});