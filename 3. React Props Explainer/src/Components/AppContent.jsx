import BasicProps from "./BasicProps"
import RefProps from "./RefProps"
import ChildrenProps from "./ChildrenProps"
import ComplexProps from "./ComplexProps"
import ThemeToggler from "./ThemeToggler"
import Navigation from "./Navigation"
import Header from "./Header"
import Footer from "./Footer"
export default function AppContent() {
  return (
    <>
    <Header></Header>
    <Navigation></Navigation>
    <BasicProps />
    <ChildrenProps />
    <ComplexProps />
    <RefProps />
    <ThemeToggler />
    <Footer></Footer>
    </>
  )
}