import React from 'react';
import { Layout,Page,Button} from '@shopify/polaris';
import {
    AlertTriangleIcon,
    InfoIcon
} from '@shopify/polaris-icons';
import './Intro.css'
const Intro = () => {
    return (
        <div className='IntroParent'>
            <div className='IntroName'>
                Welcome, John Mathew!!
            </div>
            <Page fullWidth>
                <Layout>
                    <Layout.Section variant='oneThird'>
                        <div className='card1'>
                            <div className='card1-content'>
                                <div className='card1-header'>
                                    Order Sync Successful!
                                </div>
                                <div className='card1-subtext'>
                                    Your order details from the last 30 days have been successfully synced. Check them out now!
                                </div>
                                <div className='card1-footer'>
                                    <Button variant='primary'>Explore Your Orders</Button>
                                </div>
                            </div>
                        </div>
                    </Layout.Section>
                    <Layout.Section variant='oneThird'>
                        <div className='card2'>
                            <div className='card1-content'>
                                <div className='card1-header'>
                                    <AlertTriangleIcon tone="base" className='icon' />
                                    Customize Customer Notification
                                </div>
                                <div className='card1-subtext'>
                                    Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers
                                </div>
                                <div className='card1-footer'>
                                    <Button variant='primary'>Configure Notifications</Button>
                                </div>
                            </div>
                        </div>
                    </Layout.Section>
                    <Layout.Section variant='oneThird'>
                        <div className='card3'>
                            <div className='card1-content'>
                                <div className='card1-header'>
                                    <InfoIcon tone="base" className='icon' />
                                    Your Tracking Link has been generated
                                </div>
                                <div className='card1-subtext'>
                                    Include the Link to Your Store's Navigation Menu.
                                </div>
                                <div className='card3-footer'>
                                    <Button variant='primary'>Copy Link</Button>
                                    <Button variant='primary'>Go To Navigation Menu</Button>
                                </div>
                            </div>
                        </div>
                    </Layout.Section>
                </Layout>
            </Page>
        </div>
    )
}
export default Intro