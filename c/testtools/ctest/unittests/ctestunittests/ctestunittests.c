/*
Microsoft Azure IoT Device Libraries
Copyright (c) Microsoft Corporation
All rights reserved. 
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the Software), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.
*/

#include "ctest.h"

int main(int argc, char* argv[])
{
    argc = argc;
    argv = argv;

    size_t failedTests = 0;

    /* This first suite is ran without counting failed tests to prove that the argument is optional. */
    CTEST_RUN_TEST_SUITE(SimpleTestSuiteOneTest);
    CTEST_RUN_TEST_SUITE(SimpleTestSuiteTwoTests, failedTests);
    CTEST_RUN_TEST_SUITE(AssertFailureTests, failedTests);
    CTEST_RUN_TEST_SUITE(AssertSuccessTests, failedTests);
    CTEST_RUN_TEST_SUITE(TestSuiteInitializeCleanupTests, failedTests);
    CTEST_RUN_TEST_SUITE(TestFunctionInitializeTests, failedTests);
    CTEST_RUN_TEST_SUITE(TestFunctionCleanupTests, failedTests);

    return failedTests;
}
