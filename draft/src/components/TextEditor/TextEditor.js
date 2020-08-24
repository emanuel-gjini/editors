import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextEditor.module.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = () => (
  <div className={styles.TextEditorContainer} data-testid="TextEditor">
    <Editor
      placeholder="Type in here..."
      // editorState={editorState}
      wrapperClassName={styles.TextEditorWrapper}
      editorClassName={styles.TextEditor}
      // onEditorStateChange={this.onEditorStateChange}
    />
  </div>
);

TextEditor.propTypes = {};

TextEditor.defaultProps = {};

export default TextEditor;
