import React, { Component } from 'react';
import {View, Text, Link} from 'react-native'

import Colors from '../constants/Colors';

class LinkList extends Component {
    render() {
        return (
            <View>
            <div>
                <Link href='https://instagram.com/loganleopold/'><Text>
                    Instagram
                </Text></Link>
                <Link href='https://vsco.co/loganleopold/images/1'>VSCO</Link>
                <Link href='http://github.com/loganLeopold/'><Text>
                    Github
                </Text></Link>
                <Link href='http://loganleopold.github.io'><Text>
                    Portfolio
                </Text></Link>
                <Link href='profiles.generalassemb.ly/loganleopold'><Text>
                    GA Profile
                </Text></Link>
            </div>
            </View>
        );
    }
}

export default LinkList;