import { Modifier, EditorState } from 'draft-js'

export function addText (editorState: EditorState, bufferText) {
  const contentState = Modifier.insertText(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    bufferText
  )
  return EditorState.push(editorState, contentState, 'insert-characters')
}

export function replaceText (editorState: EditorState, bufferText) {
  const contentState = Modifier.replaceText(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    bufferText
  )
  return EditorState.push(editorState, contentState, 'insert-characters')
}
