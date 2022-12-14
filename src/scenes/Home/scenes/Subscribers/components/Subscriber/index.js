import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LazyLoad from 'react-lazy-load';

import { getSubscriberById } from 'services/subscribers/selector';
import {
  updateActiveSubscriber,
  getSubscriberInfo
} from 'services/subscribers/subscribersActions';

import { getSubscriberName } from 'services/utils';

import subscriberImg from 'assets/images/subscriber.png';
import subscribedIcon from 'assets/images/icon-subscribed.png';
import unsubscribedIcon from 'assets/images/icon-unsubscribed.png';
import subscriberInfoImg from 'assets/images/icon-info.png';
import './styles.css';

class Subscriber extends React.Component {
  constructor(props) {
    super(props);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.state = {
      isLiveChat: urlParams.get('openChat'),
      subscriberUid: urlParams.get('subscriberUid')
    };
  }

  componentDidMount = () => {
    // console.log('state', );
    const { subscriberUid, isLiveChat } = this.state;
    // console.log('subscriberId, isLiveChat', subscriberUid, isLiveChat);
    if (Number(isLiveChat) === 1 && Number(subscriberUid) === Number(this.props.subscriberId)) {
      console.log('_updateActiveSubscriber');
      this._updateActiveSubscriber();
    }
  }
  
  _updateActiveSubscriber = () => {
    this.props.actions.getSubscriberInfo(
      this.props.match.params.id,
      this.props.subscriberId
    );
    this.props.actions.updateActiveSubscriber(
      this.props.match.params.id,
      this.props.subscriberId,
      true
    );
  };

  render() {
    const { subscriber, activeSubscriberId } = this.props;

    const subscribeIcon = subscriber.isSubscribed
      ? subscribedIcon
      : unsubscribedIcon;

    const gender = subscriber.gender
      ? subscriber.gender.toUpperCase()
      : 'No Data Provided';

    return (
      <div
        className={classnames(
          'd-flex justify-content-between align-items-center p-3 subscriber-container',
          {
            active: subscriber.uid === activeSubscriberId
          }
        )}
      >
        <div className="position-relative">
          <div className="d-flex align-items-center">
            <LazyLoad height={35} width={51} offset={700}>
              <img
                src={subscriber.profilePicUrl || subscriberImg}
                alt=""
                className="mr-3 subscriber-photo"
                width={35}
                height={35}
              />
            </LazyLoad>
            <div className="d-flex flex-column">
              <span className="mr-auto subscriber-name">
                {getSubscriberName(subscriber.firstName, subscriber.lastName)}
              </span>
              <span className="subscriber-sex">
                SUBSCRIBER
                <span>{gender}</span>
              </span>
            </div>
          </div>
          <img
            alt=""
            src={subscriberInfoImg}
            className="position-absolute subscriber-info"
            onClick={this._updateActiveSubscriber}
          />
        </div>
        <button
          className="btn btn-link p-0"
          onClick={this._updateActiveSubscriber}
        >
          <img src={subscribeIcon} alt="" />
        </button>
      </div>
    );
  }
}

Subscriber.propTypes = {
  subscriberId: PropTypes.number.isRequired,

  subscriber: PropTypes.shape({
    uid: PropTypes.number.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    isSubscribed: PropTypes.any,
    profilePicUrl: PropTypes.string
  }).isRequired,
  activeSubscriberId: PropTypes.number,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  activeSubscriberId: state.default.subscribers.activeSubscriberId,
  subscriber: getSubscriberById(state, props)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      updateActiveSubscriber,
      getSubscriberInfo
    },
    dispatch
  )
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Subscriber)
);
