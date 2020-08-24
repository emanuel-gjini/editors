import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TextEditor.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/* 
 * Simple editor component that takes placeholder text as a prop 
 */
class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = { editorHtml: '', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }
  render() {
    return (
      <div data-testid="TextEditor">
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          bounds={'.app'}
          placeholder="Start typing here ..."
        />
      </div>
    )
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
TextEditor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
TextEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */
TextEditor.propTypes = {
  placeholder: PropTypes.string,
}

TextEditor.defaultProps = {};

export default TextEditor;
