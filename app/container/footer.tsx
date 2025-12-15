import { Footer } from '../components/footer';

export function HomeFooter() {
  return (
    <Footer.Root>
      <Footer.Main>
        <Footer.Link />
        <Footer.FollowUs />
      </Footer.Main>
      <Footer.Secondary />
      <hr className="w-full border-1 border-gray-500 container" />
      <Footer.Copyright />
    </Footer.Root>
  );
}
