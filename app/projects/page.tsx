import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function ProjectsPage() {
  const data = [
    {
      title: "VH7",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Ramadan",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="col-span-2 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "SDO9",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "VH6",
      content: (
        <div>TEST</div>
      )
    }
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum rerum repellendus quidem vitae, quo facilis sint deserunt! Praesentium iste id placeat in commodi fugit quis officiis consequatur eius expedita? Debitis aliquid quaerat pariatur modi doloribus, consequuntur nam nemo magni ipsa alias dolorem architecto labore sint sequi? Error repellat magnam quam perspiciatis, modi, minus sint facere, assumenda vero maiores cum. Necessitatibus odio dicta nemo aperiam fugit! Veniam, delectus consequuntur natus expedita fugiat atque deleniti reiciendis quod odit at placeat sunt facilis, deserunt voluptate necessitatibus obcaecati eos quasi reprehenderit voluptatibus inventore magnam? Modi, magni! Neque ad deleniti obcaecati consequatur animi repudiandae aperiam dicta voluptatem, eveniet minus ut sunt qui quos dolorem sed voluptatum, unde id voluptas soluta, dignissimos hic quas. Explicabo ut assumenda temporibus reiciendis quas vitae nam, repellendus recusandae nisi laboriosam iusto dignissimos excepturi officiis animi. Facilis, ex? Aperiam animi, beatae veritatis accusantium harum nisi saepe, eum rem obcaecati molestiae quisquam rerum laudantium quam, qui fugiat perferendis iure voluptatibus natus! Vero labore laudantium perferendis sequi! Dignissimos iusto, exercitationem molestias qui similique cupiditate rerum eum consectetur deserunt ut ad doloremque et nesciunt impedit! Voluptatum, modi. Blanditiis quas saepe ea accusamus itaque aut soluta, eveniet sequi cum? Enim consequuntur provident ipsa beatae quibusdam quos eius non dignissimos reprehenderit, eveniet nam rerum, earum ut assumenda tenetur libero praesentium excepturi laboriosam quae nemo cum adipisci sit? Ipsum tenetur ducimus sint vero aspernatur nulla deserunt omnis molestiae fugit, minima, culpa, ex aliquam fugiat libero blanditiis cum. Doloremque a odit, quibusdam assumenda iure ea asperiores praesentium quasi officia, reprehenderit, illo quo. Unde consequatur beatae delectus voluptas! Necessitatibus illo obcaecati consequatur excepturi libero porro quisquam aliquam ut ipsum praesentium exercitationem delectus perspiciatis eveniet dolorem similique, veniam architecto quis cumque ea iusto tempora, nesciunt eum possimus nemo! Rem, fugiat voluptatum! Veniam voluptate blanditiis, nobis impedit quo laudantium ex numquam? Nulla molestias, illo odit repellendus vero sapiente facere consequatur reprehenderit recusandae illum id iure fugit? Ipsa, labore ea nobis voluptas ipsam velit praesentium! Est quia tenetur non laboriosam facere, quidem impedit, voluptatum reiciendis ut ad illum perferendis incidunt harum labore quas culpa facilis in dolorem debitis corrupti delectus? Et quaerat quis ipsam id in architecto harum itaque aliquam deleniti sapiente! Iste, ullam, necessitatibus nostrum expedita natus et animi quam fugit dolorem, deleniti iure voluptate earum quas fugiat. Eveniet voluptate consequuntur perspiciatis, dignissimos assumenda quaerat error aperiam officiis, a laborum odio quisquam eius temporibus atque mollitia, sapiente dolorum nam! Cumque odio quod id voluptatem architecto ab iusto delectus quaerat eius assumenda odit impedit, exercitationem voluptatibus quo, reprehenderit libero labore harum molestiae rerum ipsum nesciunt consequuntur ducimus. Repudiandae necessitatibus nesciunt atque eius blanditiis qui sint totam quas veritatis quod, deleniti voluptas veniam nulla alias soluta magni at, temporibus illum ab inventore a, nisi aut consectetur. Repellendus architecto, hic eveniet labore id neque quidem veritatis ipsum possimus necessitatibus aut repudiandae exercitationem, perferendis dolorem. Modi numquam voluptate eligendi temporibus eaque consequatur ipsa unde ab? Voluptas consectetur qui omnis. Voluptatum quam non libero earum quos iste sequi, veniam praesentium amet officia! Illo laudantium id molestiae dolorum neque laboriosam autem sequi fugiat inventore. Saepe molestias harum nam delectus accusamus iure ad tempore beatae, officiis vitae ea quam eum culpa minus vel tempora mollitia aperiam perspiciatis dolores neque numquam? Ea omnis quos veniam? Distinctio culpa provident perferendis consectetur deleniti? Reprehenderit architecto sapiente maxime id! Recusandae illo nobis nihil nesciunt voluptatem sunt incidunt aliquam saepe, sint repellat at nam, quas voluptas? Quia neque rem doloremque dicta, excepturi dolorum ad hic commodi alias libero aliquid accusamus, illo consectetur eius assumenda iusto eligendi id porro ullam illum consequatur corporis? Laudantium fuga, illum fugiat voluptate, rerum animi itaque officia ipsa quaerat saepe rem incidunt exercitationem dicta et at vel sequi quidem cum eaque tempore. Perferendis fuga nobis officiis reprehenderit at doloribus delectus magni magnam non! Reiciendis suscipit cumque neque minus maiores nobis et vitae consectetur eum maxime. Eligendi aspernatur neque odit optio enim praesentium unde dicta, sint, cumque facere molestiae similique tenetur. Cum harum excepturi id dicta explicabo suscipit sed porro, facere delectus, dignissimos accusantium quas fugiat perspiciatis vero, eveniet numquam obcaecati provident nulla corporis quam molestiae. Id non magni itaque corrupti alias! Aspernatur rerum enim aut voluptatum repellat nostrum molestias fugit hic quasi debitis ducimus esse repudiandae error laborum, ad explicabo, minus modi mollitia. Earum dignissimos delectus atque fugit nisi numquam cupiditate culpa dicta dolore explicabo adipisci cum eligendi fuga corporis facere distinctio non tenetur modi, accusantium tempora, suscipit et! Nesciunt, sint voluptatem maiores officia nisi officiis unde eveniet, veritatis, iure nemo totam! Optio fuga quaerat totam officia illo architecto quam amet magnam, veritatis animi repellendus, aut doloribus nam, dolore mollitia! Explicabo at, quod velit, laboriosam quidem laudantium ea iste beatae assumenda accusamus quam eos. Aspernatur commodi cum facere adipisci quisquam corrupti eum molestias saepe vitae laborum, eaque, in accusamus aut. Nemo voluptatem consectetur, reprehenderit maxime quam aut, impedit, natus sapiente aliquam facilis non? Omnis, totam explicabo, temporibus voluptates earum rem delectus repellat quo quod odit quaerat est error possimus quia illo autem iusto dolores reprehenderit a provident nam reiciendis hic, enim eius. Id architecto, ea voluptatum culpa esse quia aut ut autem iste, molestias quo temporibus sed at! At velit quas consequuntur, illum optio tempore in minima vel, quam consequatur aliquam nisi culpa alias numquam perferendis ipsa quae, eligendi animi nobis et. Ipsa sint et voluptates, nesciunt, odio labore porro, quos inventore enim ab aspernatur neque architecto corporis in error consequatur ratione dolor! Neque ratione iste consectetur quod, modi a reprehenderit cupiditate dicta quo error amet labore dignissimos impedit alias nulla facilis placeat iusto quam quibusdam porro nihil. Minima voluptates aut quam totam unde, numquam eum sequi! Incidunt magnam alias ea nemo perspiciatis distinctio totam adipisci dolore atque quae, cum quisquam dolores in, earum odit eos impedit, quaerat consequatur sit! Tenetur ratione sint voluptas quia molestias dolore, commodi, facilis vitae soluta deleniti consequuntur repellendus. Corporis quisquam, eveniet laboriosam, quam, perspiciatis temporibus nisi deleniti accusantium quaerat voluptas quos odio voluptate ipsam voluptatem nostrum. Dicta nam pariatur aperiam perferendis iusto rem et dolorem accusamus tempora itaque, non corrupti, alias consequatur.
      </div>
    </div>
  );
}
