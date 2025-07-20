import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'

const screen = Dimensions.get('window')



export default class PinchableBox extends React.Component {
    scale = new Animated.Value(1)

    onPinchEvent = Animated.event(
        [
            {
                nativeEvent: { scale: this.scale }
            }
        ],
        {
            useNativeDriver: true
        }
    )

    onPinchStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(this.scale, {
                toValue: 1,
                useNativeDriver: true
            }).start()
        }
    }
    render() {
        return (
            <PinchGestureHandler
                onGestureEvent={this.onPinchEvent}
                onHandlerStateChange={this.onPinchStateChange}>
                <Animated.Image
                    source={{ uri: this.props.imageUri }}
                    style={{
                        width: screen.width,
                        height: 300,
                        transform: [{ scale: this.scale }]
                    }}
                    resizeMode='stretch'
                />
            </PinchGestureHandler>
        )
    }
}


