package com.eefy.studyclass.domain.question.service;

import com.eefy.studyclass.domain.question.dto.request.AnswerModifyRequest;
import com.eefy.studyclass.domain.question.dto.request.QuestionModifyRequest;
import com.eefy.studyclass.domain.question.dto.response.AnswerListResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionDetailResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionListResponse;

import java.util.List;

public interface QuestionService {
    List<QuestionListResponse> getQuestionList(int memberId, int classId);
    QuestionDetailResponse getQuestionDetail(int memberId, int questionId);
    void deleteQuestion(int memberId, int questionId);
    void writeQuestion(int memberId, com.eefy.studyclass.domain.question.dto.request.QuestionWriteRequest request);
    List<AnswerListResponse> getAnswerlist(int memberId, int questionId);
    void writeAnswer(int memberId, com.eefy.studyclass.domain.question.dto.request.AnswerWriteRequest request);
    void updateAnswer(int memberId, AnswerModifyRequest request);
    void updateQuestion(int memberId, QuestionModifyRequest request);
    void deleteAnswer(int memberId, int commentId);
}

