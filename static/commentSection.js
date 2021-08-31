//import React from 'react';
//import {ListGroup, ListGroupItem, Col, Row, Button, ButtonGroup, ButtonToolbar} from 'reactstrap';
import GenericCard from './genericCard.js';

class CommentSection extends React.Component {
  render() {
    const {
      comments
    } = this.props; //TEMPORARY: Need to loop {comments} (or do something better because React?)

    const header = [];
    const body = [];
    comments.forEach(comment => {
      header.push( /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "link text-decoration-none"
      }, comment["username"]));
      body.push( /*#__PURE__*/React.createElement("div", null, comment["body"]));
    }); //const header = <a href="#" className="link text-decoration-none">{comments[0]["username"]}</a>;
    //const body =  <div>{comments[0]["body"]}</div>;

    const footer = /*#__PURE__*/React.createElement(Reactstrap.ButtonToolbar, null, /*#__PURE__*/React.createElement(Reactstrap.ButtonGroup, {
      size: "sm",
      className: "px-5"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
      /*onClick={toggleComment} need to somehow fetch relevent Tweet info*/

    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-comment-alt"
    })), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-retweet"
    })), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-heart"
    })), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "mx-auto text-white-50 rounded-circle"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-share-square"
    }))));
    return /*#__PURE__*/React.createElement(Reactstrap.ListGroup, null, comments.map((comment, i) => /*#__PURE__*/React.createElement(Reactstrap.ListGroupItem, {
      key: i,
      className: "toClone bg-dark my-1"
      /* style={{display: 'none'}} */

      /*probably have a better way*/

    }, /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "no-gutters bg-dark text-white-50"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "auto"
    }, /*#__PURE__*/React.createElement("img", {
      src: "/static/images/profile.jpg",
      style: {
        height: "50px"
      },
      className: "img-fluid",
      alt: "Profile Pic"
    })), /*#__PURE__*/React.createElement(GenericCard
    /* key={i} */
    , {
      cardheader: header[i],
      cardbody: body[i],
      cardfooter: footer
    })))));
  }

}

export default CommentSection;
/*
<ul class="list-group" id="comments">
    <li class="card to-clone" style="display:none;">    <!--list item to clone-->
        <div class="row no-gutters bg-dark text-white-50">
            <div class="col-auto">
                <img src="profile.jpg" style="height:50px;" class="img-fluid" alt="">
            </div>
            <div class="col">
                <div class="px-2">
                    <div class="card-header"><a href="#" class="link text-decoration-none">@Username</a></div>
                    <div class="card-body" onclick="setInfo(this)" type="button" data-toggle="modal" data-target="#tweet-id">Content</div>
                    <div class="card-footer">
                        <span class="btn-toolbar btn-group-sm px-5">
                            <button type="button" class="btn mx-auto text-white-50 rounded-circle"><i class="far fa-comment-alt"></i></button>
                            <!--<button type="button" class="btn mx-auto text-white-50 rounded-circle"><i class="far fa-comments"></i></button>-->
                            <!--NEED TO BE ABLE TO OPEN SELECTED COMMENT AS TWEET-->
                            <button type="button" class="btn mx-auto text-white-50 rounded-circle"><i class="fas fa-retweet"></i></button>
                            <button type="button" class="btn mx-auto text-white-50 rounded-circle"><i class="far fa-heart"></i></button>
                            <button type="button" class="btn mx-auto text-white-50 rounded-circle"><i class="far fa-share-square"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>
*/