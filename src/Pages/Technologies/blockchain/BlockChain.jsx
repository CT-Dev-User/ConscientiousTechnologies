import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import BusinessTask from './businessTask/BusinessTask'
import BlockChainUseCases from './useCases/BlockChainUseCases'
import AdvancedTech from './advancedTech/AdvancedTech'
import PerksOfBlockchain from './perksOfBlockChain/PerksOfBlockchain'
import BlockChainDevStep from './blockchainDevSteps/BlockChainDevStep'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

const BlockChain = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Blockchain" />
      <OurPartener />
      <BusinessTask />
      <BlockChainUseCases />
      <PerksOfBlockchain />
      <BlockChainDevStep />
      <AdvancedTech />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Blockchain"/>
      <CaseStudies category="Technologies" subCategory="Blockchain"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Blockchain"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default BlockChain