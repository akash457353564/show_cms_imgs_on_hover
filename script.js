const data = document.querySelectorAll('[data-element="image-data"]');
const data_arr = Array.from(data);

const img_arr = data_arr.map(function (el) {
  const data_json = el.textContent;

  const data_obj = JSON.parse(data_json);
  return data_obj;
});

document.querySelector(".display_image").src = `${img_arr[0].image}`;

const img_tags = Array.from(document.querySelectorAll(".image_name_wrapper"));

img_tags.forEach(function (img_tag) {
  img_tag.addEventListener("mouseover", () => {
    //SHOW RESPECTIVE IMAGES HERE

    if (img_tag.innerText == img_arr[0].name) {
      document.querySelector(".display_image").src = `${img_arr[0].image}`;
    } else if (img_tag.innerText == img_arr[1].name) {
      document.querySelector(".display_image").src = `${img_arr[1].image}`;
    } else if (img_tag.innerText == img_arr[2].name) {
      document.querySelector(".display_image").src = `${img_arr[2].image}`;
    } else if (img_tag.innerText == img_arr[3].name) {
      document.querySelector(".display_image").src = `${img_arr[3].image}`;
    } else if (img_tag.innerText == img_arr[4].name) {
      document.querySelector(".display_image").src = `${img_arr[4].image}`;
    }
  });
});
