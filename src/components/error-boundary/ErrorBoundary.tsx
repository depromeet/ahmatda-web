import { Component, PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';
import { captureException } from '@sentry/nextjs';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMsg: string | null;
}

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  constructor(props: PropsWithChildren<ErrorBoundaryProps>) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMsg: error.name };
  }

  componentDidCatch(error: Error) {
    captureException(error);
  }

  render() {
    const { hasError, errorMsg } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) return fallback;
      return (
        <LayoutWrapper>
          <Wrapper>
            <Heading>알 수 없는 에러가 발생했어요.</Heading>
            <ErrorMsg>{errorMsg}asdf asdf adsf adsf </ErrorMsg>
          </Wrapper>

          <Wrapper>
            <Msg>
              에러가 지속적으로 발생할 시<br />
              아래 이메일로 연락해 주세요.
            </Msg>
            <Email href="mailto:ahmatda.app@gmail.com">ahmatda.app@gmail.com</Email>
          </Wrapper>
        </LayoutWrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

const LayoutWrapper = styled.div`
  max-width: ${({ theme }) => theme.size.maxWidth};
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 30% 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Heading = styled.div({ marginBottom: '4px' }, ({ theme }) => ({
  ...theme.typographies.title2,
  color: theme.colors.primary,
}));

const ErrorMsg = styled.span(({ theme }) => ({
  ...theme.typographies.caption2,
  color: theme.colors.gray4,
}));

const Msg = styled.span({ textAlign: 'center', marginBottom: '24px' }, ({ theme }) => ({
  ...theme.typographies.body1,
  color: theme.colors.gray5,
}));

const Email = styled.a(
  {
    all: 'unset',
    cursor: 'pointer',
    padding: '10px 22px',
    borderRadius: '8px',
    ':active': {
      transform: 'scale(0.95)',
    },
    transition: 'transform .3s',
  },
  ({ theme }) => ({ backgroundColor: theme.colors.primary, color: theme.colors.white }),
);
