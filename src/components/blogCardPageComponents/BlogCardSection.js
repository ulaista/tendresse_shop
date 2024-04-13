import React from "react";
import foto_1 from "../../img/img9.webp";
import { ProductCard } from "../homePageComponents/ProductCatalog";
import { Link } from "react-router-dom";
import foto1 from "../../img/3.jpg";

const products = [
  {
    id: 1,
    name: "Комплект ",
    details: "бюстгальтер и трусики",
    price: "800 €",
    imageUrl: foto1,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#000100", "#02100"],
  },
  {
    id: 1,
    name: "Комплект ",
    details: "бюстгальтер и трусики",
    price: "800 €",
    imageUrl: foto1,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#000100", "#02100"],
  },
  {
    id: 1,
    name: "Комплект ",
    details: "бюстгальтер и трусики",
    price: "800 €",
    imageUrl: foto1,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#000100", "#02100"],
  },
  {
    id: 1,
    name: "Комплект ",
    details: "бюстгальтер и трусики",
    price: "800 €",
    imageUrl: foto1,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#000100", "#02100"],
  },
];

const BlogCardSection = () => {
  const blogCardData = [
    {
      id: 1,
      title: "СЕКРЕТЫ СЕЛФ-ЛАВ: СОХРАНИ КРАСОТУ С НАШИМ НИЖНИМ БЕЛЬЕМ",
      descrip:
        "В блогах обычно помещают дополнительную информацию касательно проекта, полезные сведенья для клиента, рекламную информацию. Здесь вы сможете разместить статью интересующего вас содержания, подобрать привлекательные шрифты, а также использовать другие инструменты, которые сделают статью интересной для читателя. Обычно внимание привлекают яркие, конкретные заголовки, а также добавочные материалы: видео, статичные и анимированные картинки.",
      imageUrl: foto_1,
      img_title_descrip: "ИСПОЛЬЗУЙТЕ ИЗОБРАЖЕНИЯ",
      img_descrip:
        "Вы можете вставлять картинки – как статичные, так и анимированные. Красивая фотография украшает любой текст, без иллюстраций статьи выглядят сухо и формально. Загрузить изображение также просто, как видео. Чем больше качественных картинок появится на странице, тем лучше будет впечатление у читателя. <br/><br/> Вы можете сделать свои фото, купить картинки в фотобанке или воспользоваться бесплатными складами. Проиллюстрируйте ваше меню, интерьер и внешний вид вашего заведения, это привлечет внимание потенциальных клиентов. Лучше всего использовать качественные фото с высоким разрешением.",
      videoUrl: foto_1,
      productslist_title: "РАЗМЕСТИТЕ ТОВАРЫ",
      productslist_descrip:
        "В блогах обычно помещают дополнительную информацию касательно проекта, полезные сведенья для клиента, рекламную информацию. Здесь вы сможете разместить статью интересующего вас содержания, подобрать привлекательные шрифты, а также использовать другие инструменты, которые сделают статью интересной для читателя.<br/>Обычно внимание привлекают яркие, конкретные заголовки, а также добавочные материалы: видео, статичные и анимированные картинки.",
      video_title: "ИСПОЛЬЗУЙТЕ ВИДЕО",
      video_descrip:
        "Вы можете разместить на странице видео с YouTube, которое можно смотреть, не переходя на другой сайт. Видео не только привлекает внимание читателя, но и дополняет информацию, поданную в статье. Разместить ролик можно с помощью всего нескольких кликов. Это пригодится, если вы сняли промо-ролик к какому-то событию, связанному с вашим проектом.<br/>Видео это один из лучших рекламных типов контента оно солидное, привлекает внимание и лучше запоминается, чем простая картинка или текст. Поэтому наполнив блог видеороликами, вы сможете привлечь существенно больше людей к вашему проекту. Настройте и оформите расположение ролика так, как вам нравится.",
      video_src: foto_1,
      src: "/blog1",
    },
  ];

  return (
    <div className="text-[#40312C]">
      {blogCardData.map((card, index) => (
        <h1 className="text-3xl mx-28 mt-7" key={index}>
          {card.title}
        </h1>
      ))}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 h-max w-10/12">
          <div className="flex">
            <div className="m-5 w-full h-max sticky top-4">
              <img
                className="w-full object-cover justify-start"
                src={foto_1}
                alt="Product_ebalo"
              />
            </div>
          </div>
          <div className="mx-4">
            {blogCardData.map((card, index) => (
              <div key={index} className="mt-7">
                <h3 className="text-2xl font-medium">
                  {card.img_title_descrip}
                </h3>
                {/* Внимание: использование dangerouslySetInnerHTML может быть опасным, если контент не очищен от потенциально вредоносного кода */}
                <div
                  dangerouslySetInnerHTML={{ __html: card.img_descrip }}
                ></div>
              </div>
            ))}
            <div className="grid mt-7 grid-cols-2 gap-x-5">
              {products.map((product, index) => (
                <div key={index} className="mb-16">
                  {" "}
                  {/* Add negative margin-bottom */}
                  <Link to="/product1">
                    <ProductCard product={product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {blogCardData.map((card, index) => (
          <div key={index} className="mt-7 grid grid-cols-1 w-7/12">
            <h3 className="text-2xl font-medium">{card.productslist_title}</h3>
            {/* Внимание: использование dangerouslySetInnerHTML может быть опасным, если контент не очищен от потенциально вредоносного кода */}
            <div
              dangerouslySetInnerHTML={{ __html: card.productslist_descrip }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="grid mt-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 w-9/12 ">
          {products.map((product, index) => (
            <div key={index} className="mb-16 ">
              {" "}
              {/* Add negative margin-bottom */}
              <Link to="/product1">
                <ProductCard product={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 h-max w-10/12">
          <div className="mx-4">
            {blogCardData.map((card, index) => (
              <div key={index} className="mt-7">
                <h3 className="text-2xl font-medium">
                  {card.video_title}
                </h3>
                {/* Внимание: использование dangerouslySetInnerHTML может быть опасным, если контент не очищен от потенциально вредоносного кода */}
                <div
                  dangerouslySetInnerHTML={{ __html: card.video_descrip }}
                  className="mt-2"
                ></div>
              </div>
            ))}
            <div className="grid mt-7 grid-cols-2 gap-x-5">
              {products.map((product, index) => (
                <div key={index} className="mb-16">
                  {" "}
                  {/* Add negative margin-bottom */}
                  <Link to="/product1">
                    <ProductCard product={product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="m-5 w-full h-max sticky top-4">
              <img
                className="w-full object-cover justify-start"
                src={foto_1}
                alt="Product_ebalo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSection;
