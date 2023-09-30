export const metadata = {
	title: `Products - ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function ProductsLayout({ children }) {
	return <div>{children}</div>;
}
