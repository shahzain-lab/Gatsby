import React from "react"
import { Link } from 'gatsby';  
import Layout from "../components/Layout";

export default function Home() {
  return (
  <div>
    Hello world! from gatsby user
    <hr />
    <Link to="/About">About page</Link>
    </div>
  )
}
