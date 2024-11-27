import React, { useEffect, useRef, /*useState, memo*/ } from 'react';
//import { useHistory, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Button from '../../../components/common/Button/Button';

const CommunityWrite = ({ style, value, onChange }) => {
    //const history = useHistory();
    //const [htmlContent, setHtmlContent] = useState("");
    //const { id: postId } = useParams();
    const quillRef = useRef();

    const handleSubmit = async () => {
        const description = quillRef.current.getText();
        if (description.trim()==="") {
            alert("내용을 입력해주세요.")
            return;
        }
        /*if (postId) {
            //기존 게시글 업데이트
            await api.updatePost({postId,description,htmlContent});
            //history.push(`/@${user.name}/post/${postId}`);
        } else {
            //새로운 게시글 생성
            await api.createNewPost({description,htmlContent});
            //history.push(`/@${user.name}/posts?folder=${selectedFolder}`);
        }*/
    }

    useEffect(() => {
        import('./Write.css');
      }, []);

    const modules = {
        toolbar: {
            container: [
                //[{ size: ["small", false, "large", "huge"] }, { color: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                    { align: [] },
                ],
                ['image'],
            ]
        }
    };
      
    return (
        <div className="contents-write-wrap">
            <div className="box-title">커뮤니티</div>
            <div className="title-ipt">
                <input type="text" placeholder="제목을 입력해 주세요" />
            </div>
            <ReactQuill 
                style={style} 
                modules={modules} 
                value={value} 
                onChange={onChange}/>
            <Button title={"등록"} onClick={handleSubmit} />
        </div>
    );
}

export default CommunityWrite;