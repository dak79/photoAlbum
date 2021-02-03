let myPicturesArray = [{
    "albumId": 1,
    "id": 1,
    "title": "mountain lake",
    "url": "../img/mont1.jpg",
    "thumbnailUrl": "../img/mont1.jpg"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "sunrise in the clouds",
    "url": "../img/mont2.jpg",
    "thumbnailUrl": "../img/mont2.jpg"
  },
  {
    "albumId": 2,
    "id": 51,
    "title": "river of lava",
    "url": "../img/mont3.jpg",
    "thumbnailUrl": "../img/mont3.jpg"
  },
  {
    "albumId": 2,
    "id": 52,
    "title": "sunset on snow",
    "url": "../img/mont4.jpg",
    "thumbnailUrl": "../img/mont4.jpg"
  },
  {
    "albumId": 3,
    "id": 127,
    "title": "sunset",
    "url": "../img/mont5.jpg",
    "thumbnailUrl": "../img/mont5.jpg"
  },
  {
    "albumId": 3,
    "id": 128,
    "title": "sunrise",
    "url": "../img/mont6.jpg",
    "thumbnailUrl": "../img/mont6.jpg"
  }
];

addEventListener('load', init);

function init() {
  // Display thumbnail
  for (i = 0; i < myPicturesArray.length; i++) {
    let img = document.createElement('img');
    let section = document.querySelector('#imageContainer');
    img.src = myPicturesArray[i].thumbnailUrl;
    img.alt = myPicturesArray[i].title;
    img.id = 'img' + i;
    section.append(img);
    img.classList.add('thumb');
  }

  //event listener (mouse click) for each image
  let listImages = document.querySelectorAll('img');
  listImages.forEach(function(everyImage) {
    everyImage.addEventListener('click', biggerImage);
  });

  let buttons = document.querySelectorAll('button');
  buttons.forEach(function(everyButton) {
    everyButton.addEventListener('click', displayAlbum);
  });
}

// bigger image
function biggerImage(evt) {

  let div = document.createElement('div');
  div.classList.add('zoomed');
  div.classList.add('glass');
  div.id = "zoom";
  let section = document.querySelector('#imageContainer');
  section.append(div);
  if (evt.target.matches('#img0')) {
    let img = document.createElement('img');
    let section = document.querySelector('#zoom');
    img.src = myPicturesArray[0].url;
    img.alt = myPicturesArray[0].title;
    img.classList.add('zoomedImage');
    section.append(img);
  }
  if (evt.target.matches('#img1')) {
    let img = document.createElement('img');
    let section = document.querySelector('#zoom');
    img.src = myPicturesArray[1].url;
    img.alt = myPicturesArray[1].title;
    section.append(img);
    img.classList.add('zoomedImage');
  }

  if (evt.target.matches('#img2')) {

    let img = document.createElement('img');
    let section = document.querySelector('#zoom');
    img.src = myPicturesArray[2].url;
    img.alt = myPicturesArray[2].title;
    section.append(img);
    img.classList.add('zoomedImage');
  }
  if (evt.target.matches('#img3')) {

    let img = document.createElement('img');
    let section = document.querySelector('#zoom');
    img.src = myPicturesArray[3].url;
    img.alt = myPicturesArray[3].title;
    section.append(img);
    img.classList.add('zoomedImage');
  }

  if (evt.target.matches('#img4')) {

    let img = document.createElement('img');
    let section = document.querySelector('#zoom');
    img.src = myPicturesArray[4].url;
    img.alt = myPicturesArray[4].title;
    section.append(img);
    img.classList.add('zoomedImage');
  }
  if (evt.target.matches('#img5')) {

    let img = document.createElement('img');
    let section = document.querySelector('#zoom');
    img.src = myPicturesArray[5].url;
    img.alt = myPicturesArray[5].title;
    section.append(img);
    img.classList.add('zoomedImage');
  }

  div.addEventListener('click', closeDiv);
}

function closeDiv() {
  let div = document.querySelector('#zoom');
  div.remove();
}
// button functionality
function displayAlbum(evt) {
  for (i = 0; i < myPicturesArray.length; i++) {

    let img = document.querySelector('#img' + i);
    img.classList.remove('notVisible');
  }

  if (evt.target.matches('#button1')) {
    for (i = 0; i < myPicturesArray.length; i++) {
      if (myPicturesArray[i].albumId !== 1) {
        let img = document.querySelector('#img' + i);
        img.classList.add('notVisible');
      }
    }
  }

  if (evt.target.matches('#button2')) {
    for (i = 0; i < myPicturesArray.length; i++) {
      if (myPicturesArray[i].albumId !== 2) {
        let img = document.querySelector('#img' + i);
        img.classList.add('notVisible');
      }
    }
  }

  if (evt.target.matches('#button3')) {
    for (i = 0; i < myPicturesArray.length; i++) {
      if (myPicturesArray[i].albumId !== 3) {
        let img = document.querySelector('#img' + i);
        img.classList.add('notVisible');
      }
    }
  }

  if (evt.target.matches('#button4')) {
    for (i = 0; i < myPicturesArray.length; i++) {

      let img = document.querySelector('#img' + i);
      img.classList.remove('notVisible');
    }
  }
}
