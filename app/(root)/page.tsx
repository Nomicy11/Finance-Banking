import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'Nomicy',lastName:"Gupta", email:'nomicygupta@gmail.com'};
  return (
    <section className="home">
        <div className='home-content'>
            <header>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext= "Access and manage your account transactions efficiently."
                />
                <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={2387.65}
                /> 
            </header>

            RECENT TRANSACTIONS
        </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 12000},{currentBalance:3000}]}
            />
    </section>
  )
}

export default Home

