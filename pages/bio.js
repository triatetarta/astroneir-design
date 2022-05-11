import { Layout } from "../components/Layout";
import unicorn from "../public/assets/unicorn.png";
import Image from "next/image";

const Bio = () => {
  return (
    <Layout>
      <section className='w-full flex items-center justify-between h-[calc(100vh-8.5rem)]'>
        <div className='w-1/3'>
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            dolorum minima, deleniti sapiente ratione nisi. Sapiente unde
            deleniti consequatur ea quo. Modi, aliquid! Quaerat necessitatibus
            recusandae fugit dolorum minus fugiat facilis alias voluptatum qui.
            Similique eligendi in, quisquam quas delectus rerum, reprehenderit
            recusandae perferendis eum exercitationem ratione explicabo ad
            labore aliquid adipisci, nostrum pariatur excepturi eaque quidem
            debitis asperiores facere. Voluptate dolorem repellendus quisquam
            cum nostrum sed obcaecati reiciendis natus, ab quae dolorum quis
            assumenda ea. Commodi nihil sed rerum quidem, ullam minus error
            consectetur architecto in harum facere veritatis recusandae? Sunt
            exercitationem neque, numquam incidunt nihil fugiat consequatur
            sint!
          </p>
          <br />
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            dolorum minima, deleniti sapiente ratione nisi. Sapiente unde
            deleniti consequatur ea quo. Modi, aliquid! Quaerat necessitatibus
            recusandae fugit dolorum minus fugiat facilis alias voluptatum qui.
            Similique eligendi in, quisquam quas delectus rerum, reprehenderit
            recusandae perferendis eum exercitationem ratione explicabo ad
            labore aliquid adipisci, nostrum pariatur excepturi eaque quidem
            debitis asperiores facere. Voluptate dolorem repellendus quisquam
            cum nostrum sed obcaecati reiciendis natus, ab quae dolorum quis
            assumenda ea. Commodi nihil sed rerum quidem, ullam minus error
            consectetur architecto in harum facere veritatis recusandae? Sunt
            exercitationem neque, numquam incidunt nihil fugiat consequatur
            sint!
          </p>
        </div>
        <div className='flex-1 relative w-1/3 h-full'>
          <Image
            src={unicorn}
            objectFit='contain'
            layout='fill'
            quality={100}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Bio;
