export const metadata = {
	title: `About Us - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function AboutUsLayout({ children }) {
	return <div>{children}</div>;
}
