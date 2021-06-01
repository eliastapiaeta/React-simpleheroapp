import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Navbar } from '../components/ui/Navbar';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

import { Test01 } from '../components/ui/Test01';
import './dashboardRoutes.css';
import { Footer } from '../components/ui/Footer';

export const DashboardRoutes = () => {
    return (
        <div className="mobile-wrap">
            <div className="mobile clearfix">
                <Navbar />

                <div style={{
                    overflow: 'auto',
                    height: '100vh',
                    marginBottom: '5rem',
                    paddingBottom: '3rem',
                    // position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                    <Switch>
                        <Route exact path="/marvel" component={MarvelScreen} />
                        <Route exact path="/hero/:heroeId" component={HeroScreen} />
                        <Route exact path="/search" component={SearchScreen} />
                        <Route exact path="/dc" component={DcScreen} />

                        <Route exact path="/test01" component={Test01} />

                        <Redirect to="/marvel" />
                    </Switch>

                    <Footer />
                </div>
            </div>
        </div>
    )
}
