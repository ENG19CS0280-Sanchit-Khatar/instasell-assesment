import React from 'react';
import './HeroSection.css'
import { Layout,Page,Button} from '@shopify/polaris';
import {
    CalendarIcon
  } from '@shopify/polaris-icons';
const HeroSection = () =>{
    return(
        <div className='parent'>
            <div className='wrapper'>
            <div className='intro'>
            Instant Dive into Your Performance Metrics
            </div>
            <div className='select-cards'>
                <div className='select-card1'>
                    Lifetime
                </div>
                <div className='card'>
                last Week
                </div>
                <div className='card'>
                last Month
                </div>
                <div className='card'>
                last Year
                </div>
                <div className='card'>
                Customize Time Line
                <CalendarIcon tone="base" className='icon'/>
                </div>
            </div>
            <Layout>
                <Layout.Section variant='oneThird'>
                    
                </Layout.Section>
                <Layout.Section variant='oneThird'>
                    
                </Layout.Section>
                <Layout.Section variant='oneThird'>
                    
                </Layout.Section>
            </Layout>
            </div>
        </div>
    )
}
export default HeroSection