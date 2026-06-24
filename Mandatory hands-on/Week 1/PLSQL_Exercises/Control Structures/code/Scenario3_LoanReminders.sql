BEGIN
    FOR loan_record IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' ||
            loan_record.LoanID ||
            ' for Customer ' ||
            loan_record.CustomerID ||
            ' is due on ' ||
            TO_CHAR(loan_record.DueDate,'DD-MON-YYYY')
        );

    END LOOP;

END;
/