import React from 'react'
import { Helmet } from 'react-helmet'



import Header from '../components/header.js'
import CallToAction from '../components/call-to-action.js'




export default function Home() {
 

  return (
    <div id="container">
  <Helmet>
   <meta charSet="UTF-8"/>
 <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
 <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
 <title>Martin Murtagh Soicial Seller</title>
 <meta name="keywords" content="Social Selling, Lead Generation, Product Palcement, linkedin, facebook"/>
 <meta name="description" content="Learn how to navigate the social platforms like the professional you are, With top shelf Social selling Training and lectures delivered by an award wining marketer and social guru"/>
 <meta name="AC.Email" content="business@martinmurtagh.com" />
 <meta name="DC.Title" content="Social Seller" />
 <meta name="DC.Language" content="en" />
 <meta name="DC.Subject" content="Social selling" />
 <meta name="DC.Description" lang="en" content="Learn how to navigate the social platforms like the professional you are, With top shelf Social selling Training and lectures delivered by an award wining marketer and social guru" />
 <meta name="DC.Publisher" content="RealworldWeb" />
 <meta name="DC.Type" scheme="dct1" content="commerical services" />
 <meta name="DC.Type" content="Social Seller Northern Ireland, NI, Ireland, ROI" />
 <meta name="DC.Coverage" content=" Northern Ireland, NI, Ireland, ROI" />
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
 <script src="https://kit.fontawesome.com/c44a3b9574.js" crossorigin="anonymous"></script> 
   </Helmet>
  <header>
    <Header />
  </header>
  <main id="main" className="d-block position-relative mb-5">
   <CallToAction />
  </main>
  </div>
  )
}
