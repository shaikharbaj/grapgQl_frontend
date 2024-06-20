// import "../../../public/css/main.css";
//import "../../../public/css/responsive.css";
// import PublicLayoutWrapper from "@/layouts/public/PublicLayoutWrapper";
interface IPublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FunctionComponent<IPublicLayoutProps> = ({ children }) => {
//   return <PublicLayoutWrapper>{children}</PublicLayoutWrapper>;
return children;
};

export default PublicLayout;

