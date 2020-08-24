import React from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import styles from './TextEditor.module.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Component } from 'react';


class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div data-testid="TextEditor">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          placeholder="Start typing here ..."
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    )
  }
}


TextEditor.propTypes = {};

TextEditor.defaultProps = {};

export default TextEditor;
