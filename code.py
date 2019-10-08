limit = 20


def bisection(fun, a, b, tol):

    print('bisection')

    def f(x):
        return eval(fun)
    counter = 0
    if f(a)*f(b) < 0:
        # print('tem funcao zero')
        while counter < limit:
            counter += 1

            xm = abs((a+b)/2)

            print('run:', counter, 'xm:', xm, 'a:', a,
                  'f(a):', f(a), 'b:', b, 'f(b):', f(b))

            if abs(f(xm)) <= tol:
                return
            if f(xm) < 0 and f(a) < 0:
                a = xm
            elif f(xm) < 0 and f(b) < 0:
                b = xm
            elif f(xm) > 0 and f(a) > 0:
                a = xm
            elif f(xm) > 0 and f(b) > 0:
                b = xm
    else:
        pass
        # print('nao tem funcao zero')


def falsePosition(fun, a, b, tol):
    print('falsePosition')

    def f(x):
        return eval(fun)
    counter = 0
    if f(a)*f(b) < 0:
        # print('tem funcao zero')
        while counter < limit:
            counter += 1

            xm = (b*f(a)-a*f(b))/(f(a)-f(b))

            print('run:', counter, 'xm:', xm, 'a:', a,
                  'f(a):', f(a), 'b:', b, 'f(b):', f(b))

            if abs(f(xm)) <= tol:
                return
            if f(xm) < 0 and f(a) < 0:
                a = xm
            elif f(xm) < 0 and f(b) < 0:
                b = xm
            elif f(xm) > 0 and f(a) > 0:
                a = xm
            elif f(xm) > 0 and f(b) > 0:
                b = xm
    else:
        # print('nao tem funcao zero')
        pass


def fixedPoint(fun, a, b, tol):
    print('fixedPosition')

    def f(x):
        return eval(fun)
    # gx = (fun+'+x')H
    gx = '(4754.28-4754.28*pow((1+x),-48))/50000'

    def g(x):
        return eval(gx)

    if f(a)*f(b) < 0:
        # print('tem funcao zero')
        counter = 0
        x0 = 0.5
        while counter < limit:
            print(counter, x0, g(x0), f(g(x0)))
            if abs(f(x0)) <= tol:
                return
            else:
                x0 = g(x0)
            counter += 1

    else:
        # print('nao tem funcao zero')
        pass


def newton(fun, a, b, tol):
    print('newton')

    def f(x):
        return eval(fun)

    def fl(x):
        return eval('(228205.44*x*pow((1+x),-49)-4754.28+4754.28*pow((1+x),-48))/(x*x)')

    x0 = a
    # print(fl(x0))
    if abs(f(x0)) >= tol:
        # print('funcao zero: ', x0)
        counter = 0
        while counter < limit:
            if abs(f(x0)) < tol:
                return
            print(counter, x0)
            x0 = x0 - (f(x0)/fl(x0))
            counter += 1
    else:
        # print('nao tem funcao zero')
        pass


def callAll(fun, a, b, tol):
    bisection(fun, a, b, tol)
    falsePosition(fun, a, b, tol)
    fixedPoint(fun, a, b, tol)
    newton(fun, a, b, tol)


callAll('4754.28*((1-pow((1+x),-48))/x)-50000', 0.09, 0.10, 0.1)


# bis('pow(x,3)-7.5*pow(x,2)+12*x+3',4.5,6,0.05, method = 0)
# callAll('1/x+pow(x,2)-5', 1, 3, 0.001)
# fixedPoint('pow(x,3)+8*x-7',0,1,0.1)
