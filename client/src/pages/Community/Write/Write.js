import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Button from '../../../components/common/Button/Button';

const CommunityWrite = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.currentTarget.value);
    };

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
    
      
    const submitPost = () => {
        const date = new Date();
        const formattedDate = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        let params = {
            notice: false,
            postName : title,
            postContent : content,
            postDate: formattedDate,
        }
        if(params.postName && params.postContent) {
            Axios.post(`http://localhost:4000/posts`, params)
            .then((res) => {
                navigate('/community');
            })
            .catch((err) => {
                console.error('작성 실패');
            });
        } else {
            alert('제목과 내용을 모두 입력해 주세요');
        }
    };
      
    return (
        <div className="contents-write-wrap">
            <div className="box-title">커뮤니티</div>
            <div className="title-ipt">
                <input id="title" type="text" placeholder="제목을 입력해 주세요" onChange={handleTitleChange} />
            </div>
            <ReactQuill 
                modules={modules}
                onChange={setContent}/>
            <Button title={"등록"} onClick={submitPost}/>
        </div>
    );
}

export default CommunityWrite;