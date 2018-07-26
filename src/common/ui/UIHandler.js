import React from 'react';

import { userDevice } from './helpers/DOMHelpers';

export default function UIHandler(Content, fetchFunction) {
  class UiHandler extends React.Component {
    static fetchData({ store, params }) {
      return store.dispatch(fetchFunction(params));
    }

    constructor(props) {
      super(props);

      this.state = {
        device: {},
      };

      this.modalType = '';
      this.modalData = {};
      this.uiHiddenComponents = ['menu', 'modal'];
    }

    componentDidMount() {
      const ui = userDevice();
      this.setUiInfos(ui);
      window.addEventListener('resize', this.computeUiInfos, false);
      this.doc = document.body;
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.computeUiInfos, false);
    }

    setUiInfos = (ui) => {
      this.setState({
        device: ui,
      });
    }

    computeUiInfos = () => {
      const updatedUi = userDevice();
      this.setUiInfos(updatedUi);
    }

    toggleSiteHiddenComponents = (evt, obj) => {
      if (this.doc !== null) {
        const { modal } = this.state;
        const docClass = this.doc.classList;
        let action;
        if (evt.target.classList && evt.target.classList.length > 1) {
          evt.target.classList.forEach(
            (el) => {
              if (el.indexOf('_handle') > -1) {
                action = el;
              }
            },
          );
        } else {
          action = evt.target.className;
        }
        let updateModalState = false;
        let isMenu = false;
        if (action.indexOf('_handle') > -1) {
          action = action.replace('_handle', '_open');
          updateModalState = action === 'modal_open';
          isMenu = action === 'menu_open';
          if (docClass.contains(action)) {
            docClass.remove(action);
            docClass.add(isMenu ? 'menu_closing' : 'closing');
            if (isMenu) {
              setTimeout(() => { docClass.remove('menu_closing'); }, 705);
            } else {
              setTimeout(() => { docClass.remove('closing'); }, 305);
            }
            // enableScroll();
          } else {
            this.uiHiddenComponents.forEach(
              (component) => {
                const oldaction = `${component}_open`;
                if (docClass.contains(oldaction) && oldaction !== action) {
                  docClass.remove(oldaction);
                  updateModalState = oldaction === 'modal_open';
                }
              },
            );
            docClass.add(action);
            // disableScroll();
          }
          if (updateModalState) {
            this.modalType = !modal ? evt.target.getAttribute('data-action') : '';
            this.modalData = !modal && obj !== null ? obj : {};
          }
        } else { // overlayer
          this.uiHiddenComponents.forEach(
            (component) => {
              const oldaction = `${component}_open`;
              if (docClass.contains(oldaction)) {
                docClass.remove(oldaction);
                docClass.add('closing');
                setTimeout(() => { docClass.remove('closing'); }, 305);
                // enableScroll();
              }
            },
          );
          if (modal) {
            this.modalType = '';
            this.modalData = {};
          }
        }
      }
    }

    render() {
      return (
        <Content
          {...this.props}
          {...this.state}
          modalType={this.modalType}
          modalData={this.modalData}
          toggleSiteHiddenComponents={this.toggleSiteHiddenComponents}
        />
      );
    }
  }
  return UiHandler;
}
